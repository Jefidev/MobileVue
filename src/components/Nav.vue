<template>
  <nav class="navbar navbar-light navbar-expand-lg static-top bg-white clean-navbar">
        <div class="container">
          <router-link class="navbar-brand logo" to="/"><a href="#" class="navbar-brand" ><img src="/src/assets/logo.png"></a>Know Your Town</router-link>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation">
                      <router-link class="nav-link active" to="/app">Get the app</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
