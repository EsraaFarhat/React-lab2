import React from "react";

const List = (props) => {
  const { loading, errors, data, type } = { ...props };
  if (loading) return <h1>Loading...</h1>;
  if (errors) return <h1>{errors}</h1>;
 
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row">
          {type === "repositories"
            ? data.map((item) => (
                <div className="col-sm-3 mt-5">
                  <div className="card" style={{ height: "15rem" }}>
                    <div className="card-header">
                      <h5 className="card-title">{item.name}</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            : type === "users"
            ? data.map((user) => (
                <div className="col-sm-3 mt-5">
                  <div className="card" style={{ height: "15rem" }}>
                    <div className="card-header">
                      <h5 className="card-title">{user.login}</h5>
                    </div>
                    <div className="card-body">
                      <img
                        src={user.avatar_url}
                        className="card-img-bottom text-center"
                        style={{
                          marginTop: -10,
                          marginLeft: 20,
                          width: "10rem",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </React.Fragment>
  );
};

export default List;
