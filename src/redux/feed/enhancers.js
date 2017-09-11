import { feedItemType } from '../../constants/feedItemType'
import { getRandomInt } from '../../utils/arrays'
import { hints } from '../../constants/hints'
import { hintUtil } from '../../utils/hintUtil'

export function addHint(feedList) {
  if (hintUtil.isSeen(hints.moreAlertsFeedHint)) {
    return feedList
  }

  const hintPosition = getRandomInt(1, feedList.length - 2)
  feedList.splice(hintPosition, 0, {
    type: feedItemType.notice,
    id: hints.moreAlertsFeedHint,
  })
  return feedList
}
