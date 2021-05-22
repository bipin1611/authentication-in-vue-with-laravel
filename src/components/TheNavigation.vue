<template>
    <div v-cloak>
        <ul>
            <li>
               <router-link :to="{name:'Home'}">Home</router-link> 
            </li>
            
            <template v-if="authenthicate">

                <li>
                    <p>{{ user.name }}</p>

                    
                </li>

                
                <li>
                    <router-link :to="{name: 'dashboard'}">Dashboard</router-link> 
                    
                </li>

                
                <li>
                    <a href="#" @click.prevent="signOut">Sign Out</a> 
                    
                </li>
            </template>

            <template v-else>
                
                <li>
                    <router-link :to="{name: 'signin'}">Sigin</router-link> 
                </li>
            </template>
            
        </ul>
    </div>
</template>

<script>

import { mapGetters,mapActions } from 'vuex';
export default {
    name: 'the-navigation',

    computed:{
        ...mapGetters({
            authenthicate: 'auth/authenthicated',
            user: 'auth/user'
        })
    },

    methods:{
        ...mapActions({
            signOutAction: 'auth/signOut'
        }),

        signOut(){
            this.signOutAction().then(() => {
                this.$router.replace({
                    name: 'Home'
                })
            })
        }
    }
}
</script>

<style>
[v-cloak] { display: none;}
</style>