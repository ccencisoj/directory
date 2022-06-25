import React from 'react';
import { isEmpty } from 'lodash';
import { Formik } from 'formik';
import * as Icon from 'react-feather';
import Field from 'components/Field/Field';
import styles from './AddBar1.module.scss';
import Button from 'components/Button/Button';
import { FOLDER, FILE } from 'constants/common';
import { useViewport } from 'hooks/ViewportContext';
import { useDirectory } from 'hooks/DirectoryContext';
import RowActions1 from 'components/RowActions/RowActions1';

const AddBar1 = ()=> {
  const { mkdir } = useDirectory();
  const { isMobile } = useViewport();
  const formRef = React.useRef();

  return (
    <div className={styles.add_bar}>
      <Formik 
        initialValues={{path: ""}}
        validate={(values)=> {
          const errors = {};

          if(isEmpty(values.path.trim())) {
            errors.path = "Debe especificarse una ruta de directorio";
          }

          return errors;
        }}
        onSubmit={(values, {resetForm})=> {
          const path = values.path.trim();
          const type = path.includes(".") ? FILE : FOLDER;
          mkdir(path, type);
          resetForm();
        }}>
        {({
          handleSubmit,
          errors,
          values,
          handleChange
        })=> (
          <form 
            ref={formRef} 
            className={styles.form}
            onSubmit={(ev)=> ev.preventDefault()}>
            <Field 
              name="path"
              beforeValue="/"
              value={values.path}
              error={errors.path}
              mediumFontSize={!isMobile}
              smallFontSize={isMobile} 
              onChange={handleChange}
              onKeyDown={({key})=> key==="Enter" && handleSubmit(formRef.current)}
              actions={
                <RowActions1>
                  <Button 
                    icon={Icon.Plus} 
                    label={!isMobile ? "Agregar" : ""}
                    primary={true}
                    onClick={()=> handleSubmit(formRef.current)}/>
                </RowActions1>
              }/>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddBar1;