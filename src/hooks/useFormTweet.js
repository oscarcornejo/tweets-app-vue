import { ref } from 'vue';

const useFormTweet = () => {
  const showForm = ref(false);

  const openCloseForm = () => {
    showForm.value = !showForm.value;
  };

  return {
    showForm,
    openCloseForm,
  };
};

export default useFormTweet;
