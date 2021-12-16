---
title: 타입스크립트의 '안전한'이라는 속성에 대하여
categories: ["타입스크립트"]
tags: ["타입스크립트", "typescript", "타입스크립트 안정성"]
---

타입스크립트를 사용하면 자바스크립트에서 발생되는 실수를 방지할 수 있다는 말을 하곤 한다.
여기에서 나오는 **실수** 라는 의미에 대해 생각해보았다.

<!-- more -->

자바스크립트는 **타입추론** 을 통해 타입을 명시하지 않아도 어떻게든 연산하려는 특징이 있다.
프로그래밍 언어 나름대로 실수를 바로잡으려는 시도라는 점에서 가치가 있다고 할 수도 있다.
타입이 명시되어 있지 않지만, 타입을 추론하여 판단하는 타입 시스템을 **동적 타입 바인딩**이라 부른다.

하지만 개발자가 다루는 데이터의 타입 자체가 잘못 다뤄지고 있는 상황은
프로그래밍 동작에 문제가 발생할 여지가 높다고 할 수 있다.
또한 문제가 발생되는 상황을 재현하는 일은 쉬운 일이 아니며,
언제 그 문제가 발생되는 지에 대해서도 개발자 스스로 인지하기 매우 힘들것이다.

왜 개발자가 스스로 인지하기 매우 힘들까??
**그건 코드로 실수를 저지른 시점과 그 실수를 처음 인지하는 시점이 달라지기 쉽기 때문이다.**
그래서 실수를 저지른 개발자 자신이 아닌,
다른 개발자 혹은 다른 직군이 에러 또는 문제를 발견해 알려주는 일이 빈번히 발생한다.

그런데 자바스크립트는 언제 문제가 발생되었다고 알려줄까?
**자바스크립트는 코드를 실행하는 시점에 알려준다.**
코드가 작성되는 시점이 아닌 코드의 실행 시점에 문법적 오류를 확인하기 때문에
이미 유저에게 서빙되고 있는 코드가 문제가 있는 상황에서도
그 코드가 실제로 실행되는 시점이 오지 않는 한
코드에 문제가 있는 지 없는 지 알기 어려운 상황에 놓여진다.

그래서 타입스크립트가 등장했다.
**타입스크릡트의 가장 큰 매력은 에러를 알려주는 시점에 있다.**
명시적 타입을 지정하므로써 코드가 작성되는 시점에 에러가 발생될 여지가 보인다면 바로 에러 메세지를 노출시킨다.

그래서 타입스크립트로 코드를 작성하게 되면 개발자는
**타입 수준으로 생각하며 코드를 작성할 수 있게 된다.
또한 개발자는 자기가 다루는 데이터의 범주가 예측 가능한 상태에서 코드를 작성하기 때문에**
더 안전하고 유지하기 쉬운 프로그램을 설계할 수 있게 된다.