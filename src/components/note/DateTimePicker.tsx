import React from 'react';
import { View } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
interface DateTimePickerProps {
  setFormDate: (date: any) => void;
  open: boolean;
  setOpen: (params: boolean) => void;
}
const DateTimePicker: React.FC<DateTimePickerProps> = ({
  setFormDate,
  open,
  setOpen,
}) => {
  const [date, setDate] = React.useState(undefined);
  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      setOpen(false);
      setDate(params.date);
      setFormDate(params.date);
    },
    [setOpen, setDate, setFormDate],
  );

  return (
    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <DatePickerModal
        locale="he"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
        animationType="slide"
        label="Choose Date"
      />
    </View>
  );
};

export default DateTimePicker;
