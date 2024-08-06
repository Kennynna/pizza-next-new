import { Dialog } from '@/components/ui';
import { cn } from '@/lib/utils';
import { DialogContent } from '@radix-ui/react-dialog';
import React from 'react';

interface Props {
  className?: string;
}

export const ChooseModalProduct: React.FC<Props> = ({ className }) => {
  return (
    <Dialog>
      <DialogContent>
        <h1>Я продукт</h1>
      </DialogContent>
    </Dialog>
  );
};