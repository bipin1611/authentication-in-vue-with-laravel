<template>
    <div>
        <h1> Sign In</h1>
        <form @submit.prevent="submit">
            <div>
                <label for="email"> Email</label>
                <input type="text" id="email" name="email" v-model="form.email">
            </div>
            <div>
                <label for="password"> Password</label>
                <input type="password" id="password" name="password" v-model="form.password">
            </div>
            <div>
                <span style="color:red; font-size: 12px;" v-if="errors" v-text="errors"></span>
                <br>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

    export default {
        name: 'signin',
        data(){
            return{

                form:{
                    email: '',
                    password: ''
                },
                errors: ''
            };
        },
        methods:{
            ...mapActions({
                signIn: 'auth/signIn'    
            }),

            submit(){

                axios.post('/login', this.form)
                .then(response => {
                    
                    this.signIn(response).then(() => {
                        this.$router.replace({
                            name: 'dashboard'
                        })
                    });
                })
                .catch(error => {

                    this.errors = error.response.data.errors;
                    console.log(error.response.data.errors)

                    this.form.password = '';
                });
            }
        }
    }
</script>