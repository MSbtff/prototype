// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }
// //클래스와 extends에서도 프로토타입을 사용할 수 있음
// // 그래야 기본 클래스를 상속하여 모든 클래스에서 작동하기위해서
// // Person 객체의 프로토타입이 AgedPerson 객체에 설정이 된 것
// // Person이 super를 호출한 이유도 설명이 됨 AgedPerson 클래스에 기반해 객체를 만들고
// // 이 클래스를 기반으로 만든 객체의 프로토타입으로 설정하는 것

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

Person.prototype.printAge = function () {
  console.log(this.age);
};

function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function () {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  };
}

//여기에는 추가 되지 않음 정적메서드와 프로퍼티가 이거는 생성자 함수가 아니기때문
//위에 Person은 생성자 함수이기에 정적메서드와 프로퍼티가 생성이 됨
Person.describe = function () {
  console.log('Creating persons...');
};

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// }; // 밑에서는 실행이 안됨? 왜 선언 순서가 중요한거 같은데 이유를 모르겠음
// p 객체를 만들고 나서 안됨
/*
    p.printAge()가 정의되지 않는 이유는 
    Person.prototype 객체에 printAge() 메서드가 추가되기 전에 p 객체를 생성했기 때문입니다.
    즉, p 객체는 Person 생성자 함수를 통해 생성될 때 
    Person.prototype 객체의 프로퍼티와 메서드를 상속받았습니다. 
    이 때 Person.prototype 객체에는 printAge() 메서드가 포함되어 있지 않았기 때문에
    p.printAge()는 정의되지 않습니다.
    따라서 Person.prototype 객체에 printAge() 메서드를 추가한 후에 
    p.printAge()를 호출하면 원하는 결과를 얻을 수 있습니다.
    또는 p 객체를 새로 생성하여 Person.prototype 객체에 추가된 메서드를 상속받은 새로운 객체를 만들 수 있음
    */

const p = new Person(); // 생성자 함수와 같은 역할

p.greet(); // Hi, I am Max and I am 30 years old.

//생성자 함수는 클래스를 사용 안 할 때 사용
//특성(프로퍼티)과 메서드를 설정  new 키워드 사용
// new키워드는 생성자 함수와 같은 것을 사용
// 클래스는 생성자 함수와 같은 것을 설정하는 이상의 역할을 함 프로토타입 이라는 개념에도 도움이 됨
//예를 클래스는 construtor()가 Person()함수 내부에 있는 역할을 해주는 거임
//즉 객체가 생성될 때 안에 있는 명령어는 실행 되어야 함
// greet() 같은 메서드는 다르게 실행됨 바로 프로토탑이라 부르는 것 greet() 같은 메서드임

//prototype은 자바스크립트의 핵심으로 자바스크립트는 프로토타입 기반 언어로 프로토타입을 상속 사용
//생성자 함수를 위한 문법적 설탕이고 프로토타입에서도 동작 함
// 클래스는 더 쉽게 만들지만 셍성자 함수와 프로토타입은 객체를 지향한다.
// 프로토타입은 구축하는 모든 생성자 함수는 특별한 프로토타입 특성이 있고
// 이것에 기초하여 만들어진 객체에 추가되지 않음 그리고 자동으로 프로토타입으로 생성자 함수를
// 인스턴스화 할때 만들어지는 객체에 할당 됨
// 프로토타입 자체는 객체로 모든 객체는 프로토타입을 가짐
// 프로토타입 객체를 풀백(fallback)이라고 부름
// javascript는 탐색하는 객체에서 찾을 수 없는 특정 속성이나 메서드를 검색
// 예를 들어 객체 person에 name 프로퍼티와 greet메서드가 있다면
// 호출을 위해 person.sayHello()를 사용했는데 객체안에 메서드가 없지만 즉시 실패하는게 아닌
// person의 프로토타입 객체에서 메서드를 찾음 그리고 프로토타입 객체에도 없다면
// 프로토타입의 프로토타입을 검색 체인의 끝까지 검색해서 없다면 undefined를 반환
// 프로토타입은 연결된 객체로 풀백 객체를 제공함

console.log(p.toString()); // [object Object]
// toString() 메서드는 모든 객체에 있음 보이지 않는 객체가 있음
// _proto_ 기본 클래스로 객체와 연관되어 있음 객체 자체에 존재하지 않아도 접근하는 특성 또는 메서드가
// 있는지 확인할 수 있음 프로토타입의 끝은 글로벌 객체임

console.log(p.__proto__ === Person.prototype); // true 이 말은 생성자 함수 객체와 Person 객체와 같은 풀백 객체를 가진게 아님
//__proto__는 모든 객체에 있음
// 함수 객체는 생성자 함수를 사용하여 만든 객체로 객체리터럴 표기법으로 구축한 객체
// 생성자 함수, 배열의 도움으로 구축한 객체
// 프로토타입(prototype)은 완전히 다른거 모든 객체에 존재 하지 않음 함수 객체에만 존재
// 우리가 원하는 무언가를 프로토타입에 설정할 때 생성자 함수에 기초하여 구축된 객체에 프로토타입으로 할당
// prototype에는 생성자 함수가 할당되어 있고
// 프로토타입 내의 this는 메서드를 호출하는 객체를 의미

p.printAge(); // 30
console.log(p.__proto__); // Person { printAge: [Function: printAge] }
console.log(p.toString()); // [object Object]
//프로토타입으로 연결돼 끝으로 가면 객체 생성자 함수에서 찾을 수 있음

const p2 = new p.__proto__.constructor();
//너무 복잡하고 앱이 생성자 함수에 바로 액세스할 수 없을때 사용

console.log(p2);

console.dir(Object.prototype); //정적 메서드와 정적 특성(프로퍼티)을 보여줌
// 중요한점은 Object는 폴백 객체나 폴백 프로토타입이 아님 이둘은 다시 돌아갈 수 있음
// 전역 객체 생성자 함수는 모든 것의 폴백 객체가 아님
// 모든 객체의 폴백 값은 Object.prototype임

// prototype 프로퍼티는 모든 것 즉 생성자 함수에 존재하고 Object 그냥 생성자 함수임

// js에서나 객체 리터럴 표기법으로 만든 객체는 전역 Object 생성자 함수를 사용하는데
// 기본적으로 javascript로 생성된 객체는 기본 prototype을 가짐 이것이 Object 함수에 기반한 것
// 이 prototype을 폴백 객체로 사용함 그래서 모든 객체는 기본적으로 이걸 폴백 값으로 사용하는데
// 여기엔 생성자 함수를 위해 얻을 수 있는 기본 프로토타입 개체도 포함

// prototype은 생성자 함수에만 존재하고 __proto__는 모든 객체에 존재
console.dir(Object.prototype.__proto__); // null
// 왜냐 Object의 __proto__이 끝나기 때문
