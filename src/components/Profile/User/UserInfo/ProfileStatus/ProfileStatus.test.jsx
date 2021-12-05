import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('Status in props should be in state', () => {
        const component = create(<ProfileStatus status={"momo"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("momo");
    });

    test('After creation span should be display', () => {
        const component = create(<ProfileStatus status={"momo"}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('After creation input shouldn`t be display', () => {
        const component = create(<ProfileStatus status={"momo"}/>);
        const root = component.root;
        expect(() => {
            root.findByType('input')
        }).toThrow();
    });

    test('Input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={"momo"}/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('momo');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"momo"} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});