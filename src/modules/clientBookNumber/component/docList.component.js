import React from "react";

const DocListComponent = props => {
  let { docList, handleDocClick } = props;
  return (
    <div>
      <div>Doc List</div>
      <div>
        {docList.map((doc) => (
          <div
            key={doc._id}
            onClick={event => {
              handleDocClick(event, doc);
            }}
          >
            <div>
              {doc.firstName} {doc.lastName} ({doc.qulification}){" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocListComponent;
