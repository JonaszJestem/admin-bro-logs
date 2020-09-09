import { ActionResponse, After, buildFeature, FeatureType } from 'admin-bro';

export const logFeature = (): FeatureType => {
  const logAction = async (
    response,
    request,
    context
  ): Promise<After<ActionResponse>> => {
    if (request.method !== 'post') {
      return response;
    }
    // Here you can save it in your log file or database
    console.log(context.currentAdmin.email, request.payload);

    return response;
  };

  return buildFeature({
    actions: {
      edit: {
        after: [logAction],
      },
      new: {
        after: [logAction],
      },
      delete: {
        after: [logAction],
      },
    },
  });
};
