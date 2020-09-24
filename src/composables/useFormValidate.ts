import { reactive, ref } from 'vue'

/* eslint-disable-next-line */
export default function useFormValidate() {

  const formData = reactive(
    {
      name: "",
      email: "",
      message: ""
    }
  )

  const errors = reactive(
    {
      isNameError: false,
      isEmailError: false,
      isMessageError: false
    }
  )

  const isStatusInvalid = ref(true)
  const isSentStauts = ref(false)

  // validate EMAIL
  const reg = /* eslint-disable-next-line */
    /^[^.(),:;<>@\[\]"\\\s]([^(),:;<>@\[\]"\\\s]){0,62}[^.(),:;<>@\[\]"\\\s]@[a-zA-Z0-9][a-zA-Z0-9.-]*\.([a-zA-Z]){2,5}$/
  const inputValidateEmail = () => {
    errors.isEmailError = !(formData.email === "") && !reg.test(formData.email)
    validateAll()
  }

  const validateAll = () => {
    const a = formData.name === ""
    const b = !reg.test(formData.email)
    const c = formData.message === ""

    if (a || b || c) {
      isStatusInvalid.value = true
      return false
    }
    else {
      isStatusInvalid.value = false
      return true
    }
  }

  const sendForm = () => {
    const status = validateAll()

    if (status) {
      formData.name = ""
      formData.email = ""
      formData.message = ""

      isStatusInvalid.value = true
      isSentStauts.value = true
    }

    console.log(`Sending ${status}`)
  }

  return {
    formData,
    errors,
    isStatusInvalid,
    isSentStauts,
    inputValidateEmail,
    validateAll,
    sendForm
  }
}