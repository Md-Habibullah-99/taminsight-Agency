import React from 'react';
import useAOS from '../../hooks/useAOS';

/**
 * AnimatedCards - Reusable list/card renderer with AOS animations built-in.
 *
 * Props:
 * - items: Array of objects to render. Default fields: title, description, iconSrc
 * - getKey?: (item, index) => string | number
 * - renderIcon?: (item) => ReactNode (optional)
 * - titleProp?: string (default: 'title')
 * - descriptionProp?: string (default: 'description')
 * - className?: string wrapper class
 * - itemClassName?: string class for each card item
 * - aos?: { animation?: string, delayStep?: number } AOS config per item
 */
export default function AnimatedCards({
  items = [],
  getKey = (_, idx) => idx,
  renderIcon,
  titleProp = 'title',
  descriptionProp = 'description',
  className = 'simple_steps',
  itemClassName = 'simple_steps_item',
  aos = { animation: 'fade-up', delayStep: 100 },
}) {
  useAOS();

  return (
    <div data-scroll-reveal="" className={className}>
      {items.map((item, idx) => (
        <div
          className={itemClassName}
          data-aos={aos?.animation || 'fade-up'}
          data-aos-delay={(aos?.delayStep ?? 100) * idx}
          key={getKey(item, idx)}
        >
          {renderIcon && (
            <div className="card_steps_icon">{renderIcon(item)}</div>
          )}
          <div className="simple-step-content">
            {item?.[titleProp] && <h6 className="mb-16">{item[titleProp]}</h6>}
            {item?.[descriptionProp] && (
              <div className="body-text line-height-3">{item[descriptionProp]}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
