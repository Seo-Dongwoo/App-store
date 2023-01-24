# App Store
## 📄 프로젝트 목적 및 설명
* ### 목적
  * react hooks를 이용한 인증과정 상태관리
  * 유효성 검사 구현
  * react-router-dom을 이용해서 Routing 구현
  * 반응형 웹 구현
* ### 설명
  * mock data에서 상품을 map메소드를 이용해서 가져오기
  * 따로 useForm.js를 만들어서 로그인관련 form 구현
  * 인증과정중에 발생할 수 있는 유효성 검사 구현
  * header의 경우 반응형으로 작아지면 sidebar가 되도록 구현
  * Card 컴포넌트를 재사용에 용이하도록 구현
---
## 🛠 개발 기간 및 사용 기술

- **개발 기간** : 20222.03 ~ 2022.04
* **사용 기술** 

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>

---
## 프로젝트 실행
```
npm run start
```
---
## 🔧 이슈 및 해결
#### 이메일 유효성 검사 구현할 때, 정규식에대해 잘 알지 못해서 학습하게 되었다.
```
 // Email
  if (!values.email) {
    errors.email = "Email을 입력해주세요.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email 주소가 잘못되었습니다.";
  }
  ```
---
## 배포
https://app-store-ehddn.netlify.app/
