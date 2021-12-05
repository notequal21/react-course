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
        expect(span.length).not.toBeNull();
    });

    test('After creation span should contains correct status', () => {
        const component = create(<ProfileStatus status={"momo"}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.innerText).toBe('momo');
    });
});