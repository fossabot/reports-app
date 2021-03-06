/* eslint-disable */
/* React */
import React from 'react';

/* unit testing tools */
import { shallow } from 'enzyme';

/* d2-ui components */
import { DropDown } from '@dhis2/d2-ui-core';

import { DatasetsDropdown } from './DatasetsDropdown';

/* fake data */
import fakerData from '../../helpers/fakerTests';

jest.mock('@dhis2/d2-ui-core', () => ({
    DropDown: ('DropDown'),
}));

const ownShallow = () => {
    const onChange = jest.fn();
    return shallow(
        <DatasetsDropdown
            d2={fakerData.d2}
            onChange={onChange} />,
        {
            disableLifecycleMethods: true,
        }
    );
};

it('DatasetsDropdown renders without crashing', () => {
    ownShallow();
});

it('DatasetsDropdown does render DropDown', () => {
    const wrapper = ownShallow();
    expect(wrapper.find(DropDown)).toHaveLength(1);
});
