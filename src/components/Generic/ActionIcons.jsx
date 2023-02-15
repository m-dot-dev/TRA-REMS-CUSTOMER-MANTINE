import { ActionIcon, Group, Tooltip } from '@mantine/core'
import { IconDownload, IconEdit, IconEye, IconTrash } from '@tabler/icons'
import React, { useState } from 'react'
import ViewBooking from './ViewBooking'
import ViewBlogs from './ViewBlogs'
import ViewFeedback from './ViewFeedback'

const ActionIcons = ({ type }) => {
  const [opened, setOpened] = useState(false)
  const [blogOpened, setBlogOpened] = useState(false)
  const [feedbackOpened, setFeedbackOpened] = useState(false)

  return (
    <>
      {type === 'blog' ? (
        <Group spacing={'xs'} position="left" noWrap>
          <Tooltip label="View">
            <ActionIcon onClick={() => setBlogOpened(true)}>
              <IconEye size={20} color="purple" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Edit Blog">
            <ActionIcon>
              <IconEdit size={20} color="blue" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Delete Blog">
            <ActionIcon>
              <IconTrash size={20} color="red" />
            </ActionIcon>
          </Tooltip>
        </Group>
      ) : type === 'feedback' ? (
        <Group spacing={'xs'} position="left" noWrap>
          <Tooltip label="View">
            <ActionIcon onClick={() => setFeedbackOpened(true)}>
              <IconEye size={20} color="purple" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Delete Feedback">
            <ActionIcon>
              <IconTrash size={20} color="red" />
            </ActionIcon>
          </Tooltip>
        </Group>
      ) : (
        <Group spacing={'xs'} position="left" noWrap>
          <Tooltip label="View">
            <ActionIcon onClick={() => setOpened(true)}>
              <IconEye size={20} color="purple" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Export to CSV">
            <ActionIcon>
              <IconDownload size={20} color="red" />
            </ActionIcon>
          </Tooltip>
        </Group>
      )}
      <ViewBooking opened={opened} setOpened={setOpened} />
      <ViewBlogs blogOpened={blogOpened} setBlogOpened={setBlogOpened} />
      <ViewFeedback
        feedbackOpened={feedbackOpened}
        setFeedbackOpened={setFeedbackOpened}
      />
    </>
  )
}

export default ActionIcons