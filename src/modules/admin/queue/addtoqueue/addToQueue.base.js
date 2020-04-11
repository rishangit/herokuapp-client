import { initModel, validation } from "./addToQueue.constants";

const AddToQueueBase = props => {
  let { getBookDetailsAttempt } = props;


  const onSubmit = values => {
    getBookDetailsAttempt({
      filters: [{ ...values }]
    })
  };

  const onChange = event => {};

  const formSchema = {
    initModel,
    validation,
    onSubmit,
    onChange
  };

  const elementSchema = {
    mobile: {
      name: "mobile",
      label: "Mobile",
      type: "tel"
    },
    btnSearch: {
      label: "Search"
    },
    btnConfirm: {
      label: "Confirm",

    }
  };

  return { formSchema, elementSchema };
};

export default AddToQueueBase;
