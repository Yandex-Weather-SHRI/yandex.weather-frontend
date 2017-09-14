import { feedItemType } from 'constants/feedItemType'
import { hints } from 'constants/hints'
import { hintUtil } from 'utils/hintUtil'


export function addHint(feedList) {
  if (hintUtil.isSeen(hints.moreAlertsFeedHint)) {
    return feedList
  }

  if (feedList.some(item => item && !Array.isArray(item) && item.id === hints.moreAlertsFeedHint)) {
    return feedList
  }

  const hintPosition = feedList.length > 0 ? 1 : 0
  feedList.splice(hintPosition, 0, {
    type: feedItemType.notice,
    id: hints.moreAlertsFeedHint,
  })
  return feedList
}
