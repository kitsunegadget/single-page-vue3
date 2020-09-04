import { ref } from 'vue'

/* eslint-disable-next-line */
export default function useNavigationOpenFlag() {
  const isNavigationOpen = ref(false)
  const changeNavigationOpen = (status: boolean) => {
    isNavigationOpen.value = status
  }

  return {
    isNavigationOpen,
    changeNavigationOpen
  }
}