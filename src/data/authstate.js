import {reactive} from 'vue'
import axios from 'axios'
import router from '../router/index.js'

const AuthState = reactive({
    isAuthenticated: false,
    user: null,
    username: null,
    password: null,
    login(){
        // console.log({username: this.username, password: this.password})
        axios.post('http://localhost:8001/index.php',{
            email: this.username,
            password: this.password
        }).then((response) => {
            if(response.data.success==1){
                this.isAuthenticated = true
                this.user = response.data
                this.password=null
                this.username=null
                this.saveState()
                router.push("/")
                // router.push({name: 'home'})
            }
        })
    },
    logout(){
        this.isAuthenticated = false
        this.user = null
        this.saveState()
        router.push({name: 'home'})
    },
    saveState(){
        localStorage.setItem('authState', JSON.stringify(this))
    },
    loadState(){
        const authState = localStorage.getItem('authState')
        if(authState){
            Object.assign(this, JSON.parse(authState))
        }
    }
});

AuthState.loadState()
export default AuthState;