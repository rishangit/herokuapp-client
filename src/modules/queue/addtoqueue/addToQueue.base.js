import { initModel, validation } from "./addToQueue.constants";

const AddToQueueBase = props => {
  let { getBookDetailsAttempt } = props;

  

  const callbackfun = prop=>{
    console.log('finish search')
  }

  const onSubmit = values => {
    let parm =  {
      filters: [{ ...values }]
    }
    let data={
      data:parm,
      callback:callbackfun
    }
    getBookDetailsAttempt(data);
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
