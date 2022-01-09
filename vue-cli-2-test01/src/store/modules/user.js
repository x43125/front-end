import {login} from "@/api/login";
import {register} from "@/api/register";

const user = {
  state: {
    name: '',
  },

  actions: {
    Login({commit}, userInfo) {
      return login(userInfo).then(result => {
        console.log(result);
        console.log("登陆成功");
      })
    },
    Register({commit}, userInfo) {
      return register(userInfo).then(result => {
        console.log(result);
        console.log("注册成功");
      })
    }
  }
}

export default user
