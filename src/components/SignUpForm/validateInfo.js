export default function validateInfo(values) {
  let errors = {};

  // Username
  if (!values.username.trim()) {
    errors.username = "ID를 입력해주세요.";
  }

  // Email
  if (!values.email) {
    errors.email = "Email을 입력해주세요.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email 주소가 잘못되었습니다.";
  }

  //Password
  if (!values.password) {
    errors.password = "Password를 입력해주세요.";
  } else if (values.password.length < 6) {
    errors.password = " 최소 6자리 이상 입력해주세요.";
  }

  if (!values.password2) {
    errors.password2 = "Password를 입력하세요.";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password가 일치하지 않습니다.";
  }
  return errors;
}
