import React, { Fragment, useEffect } from "react";
import $ from "jquery";

export function Checkbox({ itemkey, label, Options }) {
  useEffect(async () => {
    $(".select--field").click(function () {
      $(this).find(".select--field-arrow").toggleClass("up-arrow");
    });
    $(".form-check input").change(function () {
      if ($(this).is(":checked")) {
        $(this).parent().parent().addClass("selected");
      } else {
        $(this).parent().parent().removeClass("selected");
      }
    });
  }, []);

  return (
    <Fragment>
      <div className="form__item" key={itemkey}> 
        <label>{label}</label>
        <div className="form-checkbox-container">
          <div className="form-checkbox-container-items">
            {Options.map((item) => {
              return (
                <Fragment>
                  <div className="form-check" key={item.user_field_id}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={item.user_field_id}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={item.user_field_id}
                    >
                      {item.option} 
                     
                    </label>
                    
                  </div>
                  {item.options.map((i) => {
                     return (
                      <Fragment>
                        <div className="form-checkbox-blocks" key={i.user_field_id}>
                          <div className="form-checkbox-item">
                            <div className="form-checkbox-title">
                              {i.option}
                            </div>
                            {i.options.map((o) => {
                              return (
                                <Fragment>
                                  <div className="form-checkbox-contents" key={o.user_field_option_id}>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={o.user_field_option_id}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={o.user_field_option_id}
                                      >
                                        {o.option}
                                      </label>
                                    </div>
                                  </div>
                                </Fragment>
                              );
                            })}
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Checkbox;
