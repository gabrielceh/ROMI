import { Label, type LabelProps } from '@radix-ui/react-label';
import { forwardRef } from 'react';

export const CustomLabel = forwardRef<HTMLLabelElement, LabelProps>(({ children, className, ...props }, ref) => (
	<Label className={`${className} text-sm font-semibold`} {...props} ref={ref}>
		{children}
	</Label>
));
