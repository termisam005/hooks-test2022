import React from "react";

export default function withHasMounted(Component) {

    class NewComponent extends React.Component {

        render() {
            return (
                <Component />
            );
        }
    }

    return NewComponent;
}