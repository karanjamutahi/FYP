<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        sawaTV
      </h1>
      <div class="links">
        <NuxtLink to='/createroute' class='button--grey'>Route Creator</NuxtLink>
        <NuxtLink 
          to="/map"
          rel='noopener'
          class='button--green'
        >
        Map
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(ctx) {
    return {}
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
