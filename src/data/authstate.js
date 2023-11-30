import {reactive} from 'vue'
import axios from 'axios'

const AuthState = reactive({
    isAuthenticated: false,
    user: null,
    username: null,
    password: null,
    login(){
        console.log({username: this.username, password: this.password})
    }
});

export default AuthState;