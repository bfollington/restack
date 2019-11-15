import React from 'react'

const styles = {
  margin: 'auto',
  padding: '20px',
  maxWidth: '420px',
}

export const StorybookWrapper = storyFn => <div style={styles}>{storyFn()}</div>
