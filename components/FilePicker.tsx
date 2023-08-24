// components/FilePicker.tsx

import { PickerOverlay } from 'filestack-react';

const apiKey = process.env.NEXT_PUBLIC_FILESTACK_API_KEY || '';

interface FilePickerProps {
    onSuccess: (response: any) => void;
    onError?: (error: any) => void;
}

const FilePicker: React.FC<FilePickerProps> = ({ onSuccess, onError }) => {
  return (
    <Picker
      apikey={apiKey}
      onSuccess={onSuccess}
      onError={onError}
      options={{
        accept: 'image/*', // Modify according to your needs
        maxFiles: 1,
        storeTo: {
          location: 'default',  // or your preferred storage
        },
      }}
      componentDisplayMode={{
        type: 'button',
        customText: 'Upload SVG'
      }}
    >
    </Picker>
  );
}

export default FilePicker;
