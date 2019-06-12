import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from 'react-emotion';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import {
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteMain,
} from '../styles/shared';
import { PageContext } from '../templates/post';
import Header from './../components/header/Header';
const smoke = require('../content/img/smoke.png');
const HomePosts = css`
  @media (min-width: 795px) {
    .post-card:nth-child(6n + 1):not(.no-image) {
      flex: 1 1 100%;
      flex-direction: row;
    }

    .post-card:nth-child(6n + 1):not(.no-image) .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      border-radius: 5px 0 0 5px;
    }

    .post-card:nth-child(6n + 1):not(.no-image) .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card:nth-child(6n + 1):not(.no-image) .post-card-content {
      flex: 0 1 357px;
    }

    .post-card:nth-child(6n + 1):not(.no-image) h2 {
      font-size: 2.6rem;
    }

    .post-card:nth-child(6n + 1):not(.no-image) p {
      font-size: 1.8rem;
      line-height: 1.55em;
    }

    .post-card:nth-child(6n + 1):not(.no-image) .post-card-content-link {
      padding: 30px 40px 0;
    }

    .post-card:nth-child(6n + 1):not(.no-image) .post-card-meta {
      padding: 0 40px 30px;
    }
  }
`;

export interface IndexProps {
  data: {
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    header: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      edges: {
        node: PageContext;
      }[];
    };
  };
}

const IndexPage: React.SFC<IndexProps> = props => {
  const width = props.data.header.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
  const height = String(Number(width) / props.data.header.childImageSharp.fluid.aspectRatio);
  return (
    <IndexLayout className={`${HomePosts}`}>
      <Helmet>
        <title>{config.title}</title>
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:image" content={props.data.header.childImageSharp.fluid.src} />
        <meta property="article:publisher" content={config.facebook} />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
        <script>
            {`
              function async(src) {
                var d = document, t = 'script',
                    o = d.createElement(t),
                    s = d.getElementsByTagName(t)[0];
                o.src = '//' + src;
                s.parentNode.insertBefore(o, s);
              }
              async('cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js');

              setTimeout(() => {
                let scene,camera, renderer, cloudParticles = [], flash, rain, rainGeo, rainCount = 0;
                function init() {
                  scene = new THREE.Scene();
                  camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
                  camera.position.z = 1;
                  camera.rotation.x = 1.16;
                  camera.rotation.y = -0.12;
                  camera.rotation.z = 0.27;
                  ambient = new THREE.AmbientLight(0x555555);
                  scene.add(ambient);
                  directionalLight = new THREE.DirectionalLight(0xffeedd);
                  directionalLight.position.set(0,0,1);
                  scene.add(directionalLight);
                  flash = new THREE.PointLight(0x062d89, 30, 500 ,1.7);
                  flash.position.set(200,300,100);
                  scene.add(flash);
                  renderer = new THREE.WebGLRenderer();
                  scene.fog = new THREE.FogExp2(0x11111f, 0.002);
                  renderer.setClearColor(scene.fog.color);
                  renderer.setSize(window.innerWidth, window.innerHeight);
                  const header = document.querySelector('#threejs');
                  header.appendChild(renderer.domElement);
                  rainGeo = new THREE.Geometry();
                  for(let i=0;i<rainCount;i++) {
                    rainDrop = new THREE.Vector3(
                      Math.random() * 400 -200,
                      Math.random() * 500 - 250,
                      Math.random() * 400 - 200
                    );
                    rainDrop.velocity = {};
                    rainDrop.velocity = 0;
                    rainGeo.vertices.push(rainDrop);
                  }
                  rainMaterial = new THREE.PointsMaterial({
                    color: 0xaaaaaa,
                    size: 0.1,
                    transparent: true
                  });
                  rain = new THREE.Points(rainGeo,rainMaterial);
                  scene.add(rain);
                  let loader = new THREE.TextureLoader();
                  loader.load("${smoke}", function(texture){
                    cloudGeo = new THREE.PlaneBufferGeometry(500,500);
                    cloudMaterial = new THREE.MeshLambertMaterial({
                      map: texture,
                      transparent: true
                    });
                    for(let p=0; p<25; p++) {
                      let cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
                      cloud.position.set(
                        Math.random()*800 -400,
                        500,
                        Math.random()*500 - 450
                      );
                      cloud.rotation.x = 1.16;
                      cloud.rotation.y = -0.12;
                      cloud.rotation.z = Math.random()*360;
                      cloud.material.opacity = 0.6;
                      cloudParticles.push(cloud);
                      scene.add(cloud);
                    }
                    animate();
                  });
                }
                function animate() {
                  cloudParticles.forEach(p => {
                    p.rotation.z -=0.002;
                  });
                  rainGeo.vertices.forEach(p => {
                    p.velocity -= 0.1 + Math.random() * 0.1;
                    p.y += p.velocity;
                    if (p.y < -200) {
                      p.y = 200;
                      p.velocity = 0;
                    }
                  });
                  rainGeo.verticesNeedUpdate = true;
                  rain.rotation.y +=0.002;
                  if(Math.random() > 0.93 || flash.power > 100) {
                    if(flash.power < 100) 
                      flash.position.set(
                        Math.random()*400,
                        300 + Math.random() *200,
                        100
                      );
                    flash.power = 50 + Math.random() * 500;
                  }
                  renderer.render(scene, camera);
                  requestAnimationFrame(animate);
                }
                init();

              }, 300);
            `}
        </script>
      </Helmet>
      <Wrapper>
        <Header data={props.data} />
        <main id="site-main" className={`${SiteMain} ${outer}`}>
          <div className={`${inner}`}>
            <div className={`${PostFeed} ${PostFeedRaise}`}>
              {props.data.allMarkdownRemark.edges.map(post => {
                return <PostCard key={post.node.fields.slug} post={post.node} />;
              })}
            </div>
          </div>
        </main>
        {props.children}

        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/blog-cover.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(quality: 100) {
                      src
                    }
                  }
                }
              }
            }
          }
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
