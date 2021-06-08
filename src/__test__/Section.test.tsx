import { render, fireEvent } from '@testing-library/react-native';
import Section from "../Section";
import React from "react";

test('test section', () => {
    const section = render(
        <Section description='description here' title='ahihi'/>
    )

    expect(section).toMatchSnapshot();
})

test('renderText correct', () => {
    const section = render(
        <Section description='description here' title='ahihi'/>
    )
    expect(section.getByText('ahihi')).toBeTruthy();
})
