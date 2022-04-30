<template>
    <div class="containeres">
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div  class="navbar-brand">
                         <router-link class="navbar-brand-name" :to="{name:'home'}">Brand</router-link>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon">
                            <!-- <font-awesome-icon icon="phone" /> -->
                            <font-awesome-icon icon="bars" />
                        </span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'blog'}">blog</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'createblog'}">createblog</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'createblog'}">Login / Register</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>          
        </header>
        <main>
            <slot></slot>
        </main>
        <footer class="container-fluid footer">
            <div class="container">
                <div class="row">
                    <div class=" col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div class="social-icons">
                             <h5>Brand</h5>
                             <div class="icons">
                                <span>
                                    <font-awesome-icon class="icon" :icon="['fab', 'youtube']"/>
                                </span>
                                <span>
                                    <font-awesome-icon class="icon" :icon="['fab', 'linkedin']"/>
                                </span>
                                <span>
                                    <font-awesome-icon class="icon" :icon="['fab', 'facebook']"/>
                                </span>
                                <span>
                                    <font-awesome-icon class="icon" :icon="['fab', 'twitter']"/>
                                </span>
                                <span>
                                    <font-awesome-icon class="icon" :icon="['fab', 'instagram']"/>
                                 </span>
                             </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div class="footer-links">
                          <ul class="footer-navigation">
                            <li class="footer-navigation-item">
                                <router-link to="/" class="footer-navigation-link">Home</router-link>
                            </li>
                            <li class="footer-navigation-item">
                                <router-link to="/" class="footer-navigation-link">Blog</router-link>
                            </li>
                            <li class="footer-navigation-item">
                                <router-link to="/" class="footer-navigation-link">Create Blog</router-link>
                            </li>
                          </ul>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <p class="text-center">Copyright  2022 All Right Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    components:{
    },
    setup(){
        return {
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .navbar-brand{
       padding: 0 0 0 100px;
       .navbar-brand-name{
            text-decoration: none;
            font-size: 1.7rem;
            color: #252424;
            font-weight: 700;
       }
    }
    .navbar{
        background:#fffefe;
        .navbar-toggler{
            .icon{
                line-height:1.4px;
            }
        }
        .navbar-nav{
            padding: 0 100px 0 0;
            .nav-item{
                padding: 0 15px;
                .nav-link{
                    color: #000;
                    font-size: .9rem;
                    letter-spacing: .7px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                .nav-link:hover{
                    border-bottom:1px solid pink; 
                }
            }
        }
    }
    .footer{
        background: #9d9d99;
        .container{
            .social-icons{
                .icons{
                    display:flex;
                    align-items:center;
                    justify-content: space-evenly;
                    .icon{
                        font-size:1.5rem;
                    }
                }
            }
            .footer-links{
                .footer-navigation{
                    .footer-navigation-item{
                        list-style-type:none;
                        .footer-navigation-link{
                            text-decoration: none;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:992px){
        .navbar-brand{
            padding: 0 0 0 20px;
        }
    }
</style>