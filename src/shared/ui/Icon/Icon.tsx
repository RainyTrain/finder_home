import { classNames } from '../../lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
  const { className, Icon } = props;
  return <Icon className={classNames(cls.Icon, {}, [className])} />;
};
