import { RoundedButton } from 'ui/atoms'


export const FeedFilter = RoundedButton.extend`
  margin-right: 8px;
  text-transform: uppercase;
  background-color: #fff;
  color: ${p => p.active ? '#fff' : 'rgba(0, 0, 0, 0.87)'};
  box-shadow: ${p => p.active ? '0 0 0 1px rgba(0, 0, 0, 0.04)' : '0 0 0 1px #ebebeb'};
  position: relative;
  z-index: 1;
  transition:
    opacity 150ms ease-in-out,
    color 150ms ease-in-out;

  &:last-of-type {
    margin-right: 0;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(304deg, #ed515f, #ff6f33);
    border-radius: inherit;
    transition: opacity 150ms ease-in-out;
    opacity: ${p => p.active ? 1 : 0};
  }

  &:active {
    opacity: 0.5;
  }
`
