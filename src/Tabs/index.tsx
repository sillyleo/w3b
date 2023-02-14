import * as Tabs from '@radix-ui/react-tabs';

const Root = (props) => {
  return (
    <Tabs.Root {...props} />
  )
}

const List = (props) => {
  return (
    <Tabs.List {...props} />
  )
}

const Trigger = (props) => {
  return (
    <Tabs.Trigger {...props} />
  )
}

const Content = (props) => {
  return (
    <Tabs.Content {...props} />
  )
}

export default { Root, List, Trigger, Content }