import {Tabs, TabsProps} from '@mantine/core';

export default function StyledTabs(props: TabsProps) {
    return (
        <Tabs
            variant="default"
            styles={(theme) => ({
                tabControl: {
                    fontSize: theme.fontSizes.md,
                    padding: `${theme.spacing.xl}px ${theme.spacing.xl}px`,
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
