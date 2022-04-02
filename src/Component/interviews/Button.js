import React from 'react';

const Button = () => {
  return (
    <div>
      <div className="Add">
                      <Button
                      style={{marginLeft:"30px",marginTop:"20px"}}
                        type="submit"
                        // onClick={() => {
                        //   setopenalert(true);
                        // }}
                        variant="contained"
                        // onClick={AddRecords}
                        color="primary"
                      >
                        SUBMIT
                      </Button>
            </div>
    </div>
  );
}

export default Button;
