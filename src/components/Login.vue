<template>
  <div class="login_box">
    <img class="login_logo" src="" alt="">
    <h1>Sign in </h1>
    <div class="content-box">
      <div class="item_box user_box">
        <label class="" for="user">Username or email address</label>
        <input type="text" id="user">
      </div>
      <div class="item_box password_box">
        <label for="password">Password<a href="#" class="forget">Forgot password?</a></label>
        <input type="text" id="password">
      </div>
      <div class="sign_btn">Sign in</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
img.login_logo{
  width: 48px;
  height: 48px;
  background: red;
  display: inline-block;
}
  .login_box{
    width: 340px;
    margin: 0 auto;
    .content-box{
      padding:20px;
      border:1px solid #d8dee2;
      font-size: 14px;
      background-color: #fff;
      border-radius: 5px;
      text-align: left;
      .item_box{
        label{
          height: 20px;
          line-height: 20px;
        }
        input{
          margin: 5px 0 15px 0;
          width: 100%;
          display: block;
        }
      }
      .password_box{
        .forget{
          padding-left:calc(~ '100% - 174px')
        }
      }
    }
    

  }
</style>
