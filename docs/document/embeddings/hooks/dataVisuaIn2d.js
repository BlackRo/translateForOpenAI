import {ref} from 'vue'

export default function(){

    const dataVisuaIn2d_names = ref(['0'])

    const dataVisuaIn2d_markText_one = '```python \n'
    +'import pandas as pd \n'
    +'from sklearn.manifold import TSNE \n'
    +'import matplotlib.pyplot as plt \n'
    +'import matplotlib \n'
    +'df = pd.read_csv(\'output/embedded_1k_reviews.csv\') \n'
    +'matrix = df.ada_embedding.apply(eval).to_list() \n'
    +'# Create a t-SNE model and transform the data \n'
    +'tsne = TSNE(n_components=2, perplexity=15, random_state=42, init=\'random\', learning_rate=200) \n'
    +'vis_dims = tsne.fit_transform(matrix) \n'
    +'colors = ["red", "darkorange", "gold", "turquiose", "darkgreen"] \n'
    +'x = [x for x,y in vis_dims] \n'
    +'y = [y for x,y in vis_dims] \n'
    +'color_indices = df.Score.values - 1 \n'
    +'colormap = matplotlib.colors.ListedColormap(colors) \n'
    +'plt.scatter(x, y, c=color_indices, cmap=colormap, alpha=0.3) \n'
    +'plt.title("Amazon ratings visualized in language using t-SNE") \n'

    const dataVisuaIn2d_markText_two = '```python \n'
    +'from sklearn.model_selection import train_test_split \n'
    +'X_train, X_test, y_train, y_test = train_test_split( \n'
    +'  list(df.ada_embedding.values), \n'
    +'  df.Score, \n'
    +'  test_size = 0.2, \n'
    +'  random_state=42 \n'
    +') \n'

    const dataVisuaIn2d_markText_three = '```python \n'
    +'from sklearn.ensemble import RandomForestRegressor \n'
    +'rfr = RandomForestRegressor(n_estimators=100) \n'
    +'rfr.fit(X_train, y_train) \n'
    +'preds = rfr.predict(X_test) \n'

    const dataVisuaIn2d_markText_four = '```python \n'
    +'from sklearn.ensemble import RandomForestClassifier \n'
    +'from sklearn.metrics import classification_report, accuracy_score \n'
    +'clf = RandomForestClassifier(n_estimators=100) \n'
    +'clf.fit(X_train, y_train) \n'
    +'preds = clf.predict(X_test) \n'

    const dataVisuaIn2d_markText_five = '```js \n'
    +'from openai.embeddings_utils import cosine_similarity, get_embedding \n'
    +'df= df[df.Score!=3] \n'
    +"df['sentiment'] = df.Score.replace({1:'negative', 2:'negative', 4:'positive', 5:'positive'}) \n"
    +"labels = ['negative', 'positive'] \n"
    +'label_embeddings = [get_embedding(label, model=model) for label in labels] \n'
    +'def label_score(review_embedding, label_embeddings): \n'
    +'  return cosine_similarity(review_embedding, label_embeddings[1]) - cosine_similarity(review_embedding, label_embeddings[0]) \n'
    +"prediction = 'positive' if label_score('Sample Review', label_embeddings) > 0 else 'negative' \n"
   
    const dataVisuaIn2d_markText_six = '```python \n'
    +'user_embeddings = df.groupby(\'UserId\').ada_embedding.apply(np.mean) \n'
    +'user_embeddings = df.groupby(\'UserId\').ada_embedding.apply(np.mean) \n'


    const dataVisuaIn2d_markText_seven = '```python \n'
    +'import numpy as np \n'
    +'from sklearn.cluster import KMeans \n'
    +'matrix = np.vstack(df.ada_embedding.values) \n'
    +'n_clusters = 4 \n'
    +'kmeans = KMeans(n_clusters = n_clusters, init=\'k-means++\', random_state=42) \n'
    +'kmeans.fit(matrix) \n'
    +'df[\'Cluster\'] = kmeans.labels_ \n'

    const dataVisuaIn2d_markText_eight = '```python \n'
    +'from openai.embeddings_utils import get_embedding, cosine_similarity \n'
    +'def search_reviews(df, product_description, n=3, pprint=True): \n'
    +'  embedding = get_embedding(product_description, model=\'text-embedding-ada-002\') \n'
    +'  df[\'similarities\'] = df.ada_embedding.apply(lambda x: cosine_similarity(x, embedding)) \n'
    +'  res = df.sort_values(\'similarities\', ascending=False).head(n) \n'
    +'  return res \n'
    +'res = search_reviews(df, \'delicious beans\', n=3) \n'

    const dataVisuaIn2d_markText_nine = '```python \n'
    +'def recommendations_from_strings( \n'
    +'  strings: List[str], \n'
    +'  index_of_source_string: int, \n'
    +'  model="text-embedding-ada-002", \n'
    +'  ) -> List[int]: \n'
    +'  """Return nearest neighbors of a given string.""" \n'
    +'  # get embeddings for all strings \n'
    +'  embeddings = [embedding_from_string(string, model=model) for string in strings] \n'
    +'  # get the embedding of the source string \n'
    +'  query_embedding = embeddings[index_of_source_string] \n'
    +'  # get distances between the source embedding and other embeddings (function from embeddings_utils.py) \n'
    +'  distances = distances_from_embeddings(query_embedding, embeddings, distance_metric="cosine") \n'
    +'  # get indices of nearest neighbors (function from embeddings_utils.py) \n'
    +'  indices_of_nearest_neighbors = indices_of_nearest_neighbors_from_distances(distances) \n'
    +'  return indices_of_nearest_neighbors \n'

    return{
        dataVisuaIn2d_names,
        dataVisuaIn2d_markText_one,
        dataVisuaIn2d_markText_two,
        dataVisuaIn2d_markText_three,
        dataVisuaIn2d_markText_four,
        dataVisuaIn2d_markText_five,
        dataVisuaIn2d_markText_six,
        dataVisuaIn2d_markText_seven,
        dataVisuaIn2d_markText_eight,
        dataVisuaIn2d_markText_nine
    }
}