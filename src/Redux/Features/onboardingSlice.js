import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    // fileNames: {
    //   cvFileName: null,
    //   trainingFileName: null,
    //   rightToWorkFileName: null,
    // },

    stepperForms: {
      userDetails: null,
      trainingsAndCertifications: [],
      employmentHistory: [],
      rightToWork: null,
      trainingsAndCertificationsUpload: null,
      referees: [],
    },
  },

  reducers: {
    // updateFIleNames: (state, action) => {
    //   const { fieldToUpdate, uploadFileName } = action.payload;
    //   state.fileNames[fieldToUpdate] = uploadFileName;
    // },
    addRightToWork: (state, action) => {
      state.stepperForms.rightToWork = action.payload;
    },

    addTrainingCert: (state, action) => {
      state.stepperForms.trainingsAndCertificationsUpload = action.payload;
    },

    updateDetails: (state, action) => {
      state.stepperForms.userDetails = action.payload;
    },

    addTraining: (state, action) => {
      state.stepperForms.trainingsAndCertifications.push(action.payload);
    },

    updateTraining: (state, action) => {
      const { id, updateData } = action.payload;

      const indexToUpdate =
        state.stepperForms.trainingsAndCertifications.findIndex(
          (cert) => cert.id === id,
        );
      if (indexToUpdate !== -1) {
        state.stepperForms.trainingsAndCertifications[indexToUpdate] = {
          ...state.stepperForms.trainingsAndCertifications[indexToUpdate],
          ...updateData,
        };
      }
    },

    addEmployHistory: (state, action) => {
      state.stepperForms.employmentHistory.push(action.payload);
    },

    updateEmployHistory: (state, action) => {
      const { id, newData } = action.payload;

      const indexToUpdate = state.stepperForms.employmentHistory.findIndex(
        (work) => work.id === id,
      );

      if (indexToUpdate !== -1) {
        // update the array at the given index
        state.stepperForms.employmentHistory[indexToUpdate] = {
          // Make a shalow copy of the
          ...state.stepperForms.employmentHistory[indexToUpdate],
          // Now merge the new data into the state at the given index
          ...newData,
        };
      }
    },

    addRefrees: (state, action) => {
      state.stepperForms.referees.push(action.payload);
    },
    updateRefrees: (state, action) => {
      const { id, refUpdateData } = action.payload;

      const refIndexToUpdate = state.stepperForms.referees.findIndex(
        (ref) => ref.id === id,
      );

      if (refIndexToUpdate !== -1) {
        state.stepperForms.referees[refIndexToUpdate] = {
          ...state.stepperForms.referees[refIndexToUpdate],
          ...refUpdateData,
        };
      }
    },

    removeEmployHistory: (state, action) => {
      // get the name of the stepperForm to delete, e.g employHistory || trainingandCert
      const { fieldName, dataId } = action.payload;
      state.stepperForms[fieldName] = state.stepperForms[fieldName].filter(
        (item) => item.id !== dataId,
      );
    },
  },
});

export const {
  updateEmployHistory,
  updateRefrees,
  addTraining,
  updateTraining,
  updateDetails,
  removeEmployHistory,
  addEmployHistory,
  addRefrees,
  addRightToWork,
  addTrainingCert,
} = formDataSlice.actions;

export const SelectStepperForms = (state) => state.onboardingSlice.stepperForms;
// export const SelectFileNames = (state) => state.onboardingSlice.fileNames;

export default formDataSlice.reducer;
