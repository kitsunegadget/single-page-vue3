<template>
  <div class="content-contact" id="contact">
    <div class="content-contact-dock">
      <div class="content-contact-title">{{ "Contact" }}</div>
      <form class="contact-form">
        <div 
          class="contact-form-error"
          v-show="isNameError || isEmailError || isMessageError"
        >
          {{ errorMsg }}
        </div>
        <div 
          class="contact-form-sent"
          v-show=isSentStauts
        >
          {{ "✔ Message has been sent" }}
        </div>
        <!-- <span class="contact-form-text">{{ "Your Name" }}</span> -->
        <input 
          v-model="name" 
          type="text"
          name="user_name"
          required
          placeholder="Your Name (Required)" 
          class="contact-form-name"
          @input="validateAll"
        />
        <input 
          v-model="email" 
          type="email"
          name="user_email"
          required
          placeholder="Your Email (Required)" 
          class="contact-form-email"
          :error=isEmailError
          @input=inputValidateEmail
        />
        <textarea 
          v-model="message" 
          name="user_message"
          required
          placeholder="Message (Required)" 
          class="contact-form-message" 
          @input="validateAll"
        />
        <!-- <input type="hidden" v-model="timestamp" /> -->
        <button 
          type="button" 
          class="contact-form-submit"
          id="submitButton"
          v-buttonState:[isStatusInvalid]
          @click="sendForm"
        >
          {{ "Send" }}
        </button>
        <span style="font-size: 1rem; color: #fff;">
          {{ "- This is the test form. Do not send personal information. -" }}
        </span><br />
        <span style="font-size: 1rem; color: #fff;">
          {{ "- Messages do not use for other content. -" }}
        </span><br />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, ButtonHTMLAttributes, toRefs } from 'vue'
import useFormValidate from '@/composables/useFormValidate'

export default defineComponent({
  setup() {
    const errorMsg = ref("Invalid Input")
 
    const { 
      formData,
      errors,
      isStatusInvalid,
      isSentStauts,
      inputValidateEmail,
      validateAll,
      sendForm
    } = useFormValidate()
    
    // watch(isEmailError, () => {
    //   if(isEmailError.value) 
    //   {
    //     errorMsg.value = "Invalid input"
    //   }
    // })

    return {
      errorMsg,
      ...toRefs(formData),
      ...toRefs(errors),
      isStatusInvalid,
      inputValidateEmail,
      validateAll,
      sendForm,
      isSentStauts
    }
  },
  directives: {
    buttonState: {
      mounted(el) {
        el.disabled = true;
      },
      updated(el: ButtonHTMLAttributes, binding) {
        if(binding.arg) {
          el.disabled = true;
        }
        else {
          el.disabled = false;
        }
      }
    }
  }
})
</script>

<style lang="scss">
.content-contact {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 60px;

  background: $color-blueblack;
}
.content-contact-dock {
  @include centering-dock;
}

.content-contact-title {
  position: relative;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-left: 35px;
  margin-bottom: 30px;

  &::before {
    position: absolute;
    content: "»";
    left: -25px;
  }
}

.contact-form {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @mixin formDefault {
    margin: 10px;
    width: 100%;
    max-width: 350px;
    min-height: 50px;
    border: none;
    border-radius: 5px;
    padding: 10px;
  }

  &-name {
    @include formDefault;
  }

  &-email {
    @include formDefault;

    &[error="true"] {
      border: solid #dc143c 5px;
    }
  }

  &-message {
    @include formDefault;
    resize: none;
    display: block;
    min-height: 150px;
  }

  &-submit {
    @include formDefault;
    color: #fff;
    font-size: 1rem;
    background: $color-green-light-hover;

    &:hover {
      cursor: pointer;
    }

    &:active {
      background: $color-green-light;
    }

    &:disabled {
      color: #999;
      background: $color-green-dark;
      cursor: not-allowed;
    }
  }

  &-error {
    color: #fff;
    padding: 10px;
    line-height: 30px;
    font-size: 1rem;
    @include formDefault;
    background: #dc143c;
    overflow-wrap: break-word;
    animation: fadeIn ease 1s;
    margin-top: -60px;

    &[sent="true"] {
      background: aquamarine;
    }
  }

  &-sent {
    color: #fff;
    padding: 10px;
    line-height: 30px;
    font-size: 1rem;
    @include formDefault;
    background: #20a748;
    overflow-wrap: break-word;
    animation: fadeIn ease 1s;
    margin-top: -60px;
  }

  span {
    text-align: center;
  }

  // &-text {
  //   min-width: 350px;
  //   color: #fff;
  //   font-size: 1rem;
  // }
}
</style>