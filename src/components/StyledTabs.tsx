import { TabsProps, Tabs } from '@mantine/core';

export default function StyledTabs(props: TabsProps) {
    return (
        <Tabs
            variant="unstyled"
            styles={(theme) => ({
                tabControl: {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
                    fontSize: theme.fontSizes.md,
                    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
                },

                tabActive: {
                    backgroundColor: theme.colors.blue[7],
                    color: theme.white,
                },
            })}
            {...props}
        />
    );
}
