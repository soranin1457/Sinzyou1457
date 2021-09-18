<!DOCTYPE html>
<html lang="ja" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <p>送信</p>
    <?php
    if (isset($_POST['text'])) {
      $text = $_POST['text'];
      echo $text;
    }
     ?>

    <script src="js/charao.js" charset="utf-8"></script>
  </body>
</html>
