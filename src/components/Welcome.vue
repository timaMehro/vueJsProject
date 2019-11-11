<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <blockquote>
      <p>Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.</p>
      <footer>Albert Einstein</footer>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 6.25rem;
  font-weight: bold;
  line-height: 1;
}

blockquote {
  margin: 0;
  padding: 0;
  max-width: 568px;
}

p {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.5rem;
  line-height: 1.5;
  opacity: .8;
}

footer {
  font-size: .75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .1em;
}
</style>
