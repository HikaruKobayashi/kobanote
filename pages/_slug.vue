<template class="w-full h-full">
  <div class="container">
    <div class="main">
      <article>
        <h1 class="font-bold text-4xl pt-6 pb-2">{{ blogs.title }}</h1>
        <p class="text-sm">{{ blogs.date }}</p>
        <nuxt-content :document="blogs" />
      </article>
    </div>
    <div class="sidebar-wrap">
      <div class="side-bar">
        <div class="profile-wrap">
          <img src="/img/cafe.jpg" width="80px" height="80px">
          <div>
            <p>Kobayashi</p>
            <span>Developer</span>
          </div>
        </div>
        <ul>
          <li><a href="https://twitter.com/0719kobayashi" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'twitter-square']" class="font-awesome-size twitter" /></a></li>
          <li><a href="https://github.com/HikaruKobayashi/kobanote" target="_blank" rel="noopener noreferrer"><fa :icon="['fab', 'github-square']" class="font-awesome-size" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@charset "utf-8";

.container {
  width: 100%;
  .main {
    width: 100%;
    padding: 20px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 4px #4385bb12;
  }

  > div > .side-bar {
    width: 100%;
    margin-top: 20px;
    padding: 10px 20px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 4px #4385bb12;
    > .profile-wrap {
      display: flex;
      align-items: center;
      > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      > div {
        padding-left: 16px;
        > p {
          font-weight: 700;
        }
      }
    }
    > ul{
      display: flex;
      justify-content: center;
      align-items: center;
      > li {
        margin-right: 10px;
        &:last-child {
          margin: 0;
        }
        > a {
          > .font-awesome-size {
            font-size: 25px;
          }
          > .twitter {
            color: #1DA1F2;
          }
        }
      }
    }
  }
}

@media screen and (min-width:768px) {
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    > .main {
      max-width: 730px;
      justify-self: end;
      margin-right: 60px;
    }

    > .sidebar-wrap {
      justify-self: start;
      > .side-bar {
        margin-top: 0;
        position: sticky;
        top: 50px;
        width: 300px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Slug",
  async asyncData({ $content, params }) {
    const blogs = await $content("blogs", params.slug || "index").fetch();
    return { blogs };
  },
};
</script>
