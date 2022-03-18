import {Tabs, TabsProps} from '@mantine/core';

export default function StyledTabs(props: TabsProps) {
    return (
        <Tabs
            variant="default"
            styles={(theme) => ({
                tabControl: {
                    fontSize: theme.fontSizes.md,
                    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
                },
                tabActive: {
                    // backgroundColor: theme.colors.blue[7],
                    color: theme.white,
                },
            })}
            {...props}
        />
    );
}
