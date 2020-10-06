import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik, validateYupSchema } from "formik";
import InputField from "custom-field/InputField";
import SelectField from "custom-field/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import RandomPhotoField from "custom-field/RandomPhotoField";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onSubmit: null,
};

const validationSchema = Yup.object().shape({
  /// Xét nếu chưa nhập thì sẽ báo lỗi
  title: Yup.string().required("This field is required"),
  // nullable dành cho thằng null
  categoryId: Yup.number().required("This field is required").nullable(),
  // ràng buộc điều kiện cho photo
  photo: Yup.string().when("category", {
    is: 1,
    then: Yup.string().required("This field is required"),
    otherwise: Yup.string().notRequired(),
  }),
});

function PhotoForm(props) {
  // dùng formik thì phải có initialValue
  const { initialValues, isAddMode } = props;
  return (
    //khai báo cho formik
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Nhập vào nè"
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="Select 1 phần tử đi nào"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />
            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? " Add to Album" : "Update your photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
