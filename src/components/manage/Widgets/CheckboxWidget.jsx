/**
 * CheckboxWidget component.
 * @module components/manage/Widgets/CheckboxWidget
 */

import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import { injectIntl } from 'react-intl';
import { FormFieldWrapper } from '@plone/volto/components';

/**
 * CheckboxWidget component class.
 * @function CheckboxWidget
 * @returns {string} Markup of the component.
 */
const CheckboxWidget = (props) => {
  const { id, title, value, onChange, isDisabled } = props;

  return (
    <FormFieldWrapper {...props} columns={1}>
      <div className="wrapper">
        <Checkbox
          toggle
          name={`field-${id}`}
          checked={value}
          disabled={isDisabled}
          onChange={(event, { checked }) => onChange(id, checked)}
          label={<label htmlFor={`field-${id}`}>{title}</label>}
        />
      </div>
    </FormFieldWrapper>
  );
};

export default injectIntl(CheckboxWidget);
